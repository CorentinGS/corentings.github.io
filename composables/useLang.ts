import { useI18n } from 'vue-i18n'

// useLang is a composable hook that returns the current locale
export const useLang = () => {
  const { t } = useI18n()
  return {
    t,
  }
}
