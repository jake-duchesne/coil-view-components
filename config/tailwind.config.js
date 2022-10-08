const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
    './app/components/**',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // To be replaced
        'error-div': 'var(--color-bg-error-div)',
        'nikola-blue': 'var(--color-nikola-blue)',
        'nikola-alt': 'var(--color-nikola-alt)',
        'fuel-critical': 'var(--color-fuel-critical)',
        'fuel-low': 'var(--color-fuel-low)',
        'light-grey': 'var(--color-light-grey)',
        'lighter-grey': 'var(--color-lighter-grey)',
        'map-tile-grey': 'var(--color-map-tile-grey)',
        'dark-grey': 'var(--color-dark-grey)',
        'hover': 'var(--color-hover)',
        'disabled': 'var(--color-disabled)',
        'info-light': 'var(--color-info-text)',
        'info-value': 'var(--color-info-value)',
        'ghost-hover': 'var(--color-ghost-hover)',
        'disabled': 'var(--color-disabled)',
        'modal-border': 'var(--color-modal-border)',
        'modal-text': 'var(--color-modal-text)',
        'copy-prompt': 'var(--color-copy-prompt-background)',
        checkbox: 'var(--checkbox-color)',
        'form-label': 'var(--color-form-label)',
        error: 'var(--color-error-message)',
        'form-placeholder': 'var(--color-form-placeholder)',
        "disabled-button": 'var(--disabled-button)',
        "disabled-text": 'var(--disabled-text)',
        "disabled-input-background": 'var(--color-input-bg-disabled)',
        "disabled-input-text": 'var(--color-input-text-disabled)'
      },
      backgroundColor: {
        "primary-blue": {
          100: "#00AEEF",
          200: "#007FAD"
        },
        "primary-black": {
          100: "#343434",
          200: "#000000"
        },
        "primary-white": "#FFFFFF",

        // To be replaced
        info: "var(--status-info)",
        success: "var(--status-success)",
        warning: "var(--status-warning)",
        danger: "var(--status-danger)",
        skin: {
          secondary: 'var(--color-bg-secondary)',
          alternate: 'var(--color-bg-alternate)',
          row: 'var(--color-bg-row)',
          btn: 'var(--color-bg-btn)',
          select: 'var(--color-bg-select)',
          rowHover: 'var(--color-bg-row-hover)',
          input: 'var(--color-form-input)',
          'input-hover': 'var(--color-form-hover)',
          'input-focus': 'var(--color-form-focus)',
          'toast-background': 'var(--color-toast-background)',
          'toast-background-error': 'var(--color-toast-background-error)',
          'copy-prompt-background': 'var(--color-copy-prompt-background)'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
