import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import ModuleHeader from './components/ModuleHeader';
import Step1General from './components/Step1General';
import Step2Fuji from './components/Step2Fuji';
import Step3Kyoto from './components/Step3Kyoto';
import Step4Comparison from './components/Step4Comparison';
import Step5Strategy from './components/Step5Strategy';
import Step6Commitment from './components/Step6Commitment';
import NavigationButtons from './components/NavigationButtons';
import ThankYouModal from './components/ThankYouModal';
import { submitSurvey } from './utils/submitSurvey';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const TOTAL_STEPS = 6;
const STORAGE_KEY = 'gplus_japan_survey_draft_v2';

const INITIAL_FORM_STATE = {
  // Step 1
  hdv_fullname: '',
  visit_frequency: '',

  // Step 2 (Fuji)
  fuji_efficiency: '',
  fuji_conversion_rate: '',
  fuji_popular_products: [],
  fuji_popular_products_other: '',
  fuji_positive_points: [],
  fuji_positive_points_other: '',
  fuji_barriers: [],
  fuji_barriers_other: '',
  fuji_cooperation_rating: '',
  fuji_improvement_notes: '',

  // Step 3 (Kyoto)
  kyoto_efficiency: '',
  kyoto_conversion_rate: '',
  kyoto_popular_products: [],
  kyoto_popular_products_other: '',
  kyoto_positive_points: [],
  kyoto_positive_points_other: '',
  kyoto_barriers: [],
  kyoto_barriers_other: '',
  kyoto_improvement_notes: '',

  // Step 4 (Comparison)
  comparison_better_point: '',
  comparison_reasons: [],
  comparison_reasons_other: '',

  // Step 5 (Strategy)
  support_from_company: [],
  support_from_company_other: '',
  support_from_store: [],
  support_from_store_other: '',
  ideal_duration: '',
  pitching_strategy: '',
  partnership_policy: '',
  top3_solutions: '',

  // Step 6 (Commitment)
  readiness_to_test: '',
  final_feedback: '',
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...INITIAL_FORM_STATE, ...JSON.parse(saved) } : INITIAL_FORM_STATE;
    } catch {
      return INITIAL_FORM_STATE;
    }
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  // Auto-save draft to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (_) {}
  }, [formData]);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleToggleList = (field, item) => {
    setFormData((prev) => {
      const currentList = Array.isArray(prev[field]) ? prev[field] : [];
      const exists = currentList.includes(item);
      const updatedList = exists
        ? currentList.filter((x) => x !== item)
        : [...currentList, item];
      return { ...prev, [field]: updatedList };
    });
  };

  // Step validation rules
  const validateStep = (step) => {
    const stepErrors = {};

    if (step === 1) {
      if (!formData.hdv_fullname || formData.hdv_fullname.trim().length < 2) {
        stepErrors.hdv_fullname = 'Vui lòng nhập họ và tên của anh/chị.';
      }
      if (!formData.visit_frequency) {
        stepErrors.visit_frequency = 'Vui lòng chọn tần suất dẫn đoàn.';
      }
    } else if (step === 2) {
      if (!formData.fuji_efficiency) {
        stepErrors.fuji_efficiency = 'Vui lòng đánh giá hiệu quả shopping tại Fuji.';
      }
      if (!formData.fuji_conversion_rate) {
        stepErrors.fuji_conversion_rate = 'Vui lòng ước tính tỷ lệ khách mua hàng.';
      }
      if (!formData.fuji_cooperation_rating) {
        stepErrors.fuji_cooperation_rating = 'Vui lòng đánh giá mức độ hợp tác của cửa hàng Fuji.';
      }
    } else if (step === 3) {
      if (!formData.kyoto_efficiency) {
        stepErrors.kyoto_efficiency = 'Vui lòng đánh giá hiệu quả shopping tại Kyoto.';
      }
      if (!formData.kyoto_conversion_rate) {
        stepErrors.kyoto_conversion_rate = 'Vui lòng ước tính tỷ lệ khách mua hàng.';
      }
    } else if (step === 4) {
      if (!formData.comparison_better_point) {
        stepErrors.comparison_better_point = 'Vui lòng chọn điểm mà anh/chị thấy hiệu quả hơn.';
      }
    } else if (step === 5) {
      if (!formData.ideal_duration) {
        stepErrors.ideal_duration = 'Vui lòng chọn thời lượng shopping hợp lý.';
      }
    } else if (step === 6) {
      if (!formData.readiness_to_test) {
        stepErrors.readiness_to_test = 'Vui lòng chọn mức độ sẵn sàng thử nghiệm.';
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    } else {
      showToast('Vui lòng hoàn thành các trường bắt buộc có dấu hoa thị (*)', 'error');
    }
  };

  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
      showToast('Vui lòng hoàn thành câu hỏi bắt buộc trước khi gửi', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitSurvey(formData);
      // Clear draft on successful submit
      localStorage.removeItem(STORAGE_KEY);
      setShowThankYou(true);
    } catch (err) {
      console.error('Submit error:', err);
      showToast('Không thể gửi dữ liệu lúc này. Vui lòng thử lại!', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const showToast = (message, type = 'info') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EFF4FB]">
      {/* Sticky App Header */}
      <Header currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      {/* Main Form Container */}
      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-4 sm:py-6">
        <ModuleHeader step={currentStep} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {currentStep === 1 && (
              <Step1General
                data={formData}
                onChange={handleFieldChange}
                errors={errors}
              />
            )}
            {currentStep === 2 && (
              <Step2Fuji
                data={formData}
                onChange={handleFieldChange}
                onToggleList={handleToggleList}
                errors={errors}
              />
            )}
            {currentStep === 3 && (
              <Step3Kyoto
                data={formData}
                onChange={handleFieldChange}
                onToggleList={handleToggleList}
                errors={errors}
              />
            )}
            {currentStep === 4 && (
              <Step4Comparison
                data={formData}
                onChange={handleFieldChange}
                onToggleList={handleToggleList}
                errors={errors}
              />
            )}
            {currentStep === 5 && (
              <Step5Strategy
                data={formData}
                onChange={handleFieldChange}
                onToggleList={handleToggleList}
                errors={errors}
              />
            )}
            {currentStep === 6 && (
              <Step6Commitment
                data={formData}
                onChange={handleFieldChange}
                errors={errors}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Security & Confidentiality Tag */}
        <div className="mt-6 mb-2 flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Thông tin phục vụ điều hành nội bộ Gplus Travel & Bảo mật tuyệt đối</span>
        </div>
      </main>

      {/* Bottom Sticky Action Bar */}
      <NavigationButtons
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        onPrev={handlePrev}
        onNext={handleNext}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[90%] p-3.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-medium shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2">
          <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
          <span>{toastMessage.message}</span>
        </div>
      )}

      {/* Thank You Celebration Modal */}
      {showThankYou && (
        <ThankYouModal
          hdvName={formData.hdv_fullname}
          onClose={() => {
            setShowThankYou(false);
            setFormData(INITIAL_FORM_STATE);
            setCurrentStep(1);
          }}
        />
      )}
    </div>
  );
}
