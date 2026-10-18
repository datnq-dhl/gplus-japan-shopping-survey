import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('index.html', encoding='utf-8') as f:
    html = f.read()

checks = {
    'FormSubmit endpoint': 'formsubmit.co/ajax/dat@grandk.org' in html,
    'Q-num labels >= 25': html.count('q-num') >= 25,
    '6 form steps': html.count('class="form-step') >= 6,
    'Honeypot field': 'hp-field' in html,
    'Radio groups >= 9': html.count('rg-') >= 9,
    'Error messages present': html.count('err-msg') >= 6,
    'Dynamic other fields >= 9': html.count('data-other=') >= 9,
    'Thank you screen': 'thank-you-screen' in html,
    'Submit loading state': 'loading' in html,
    'AbortController timeout': 'AbortController' in html,
    'Logo reference': 'Gplus%20travel.jpg' in html,
    'prevStep calls >= 5': html.count('prevStep') >= 5,
    'nextStep calls >= 5': html.count('nextStep') >= 5,
    'Checkbox check SVGs': html.count('polyline points') >= 30,
}

all_ok = True
for k, v in checks.items():
    status = 'PASS' if v else 'FAIL'
    if not v:
        all_ok = False
    print(f'  [{status}]  {k}')

print()
print('==> All checks passed!' if all_ok else '==> SOME CHECKS FAILED')
