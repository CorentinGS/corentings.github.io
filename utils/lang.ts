import { useI18n } from 'vue-i18n'

export interface ILocale {
  name: string
  iso: string
  flag: string
}

export const availableLocales: { [key: string]: ILocale } = {
  en: {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  fr: {
    name: 'Français',
    iso: 'fr',
    flag: '🇫🇷',
  },
}

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      return window ? window.navigator.language.substring(0, 2) : 'en'
    } catch (error) {
      return 'en'
    }
  }
  // getUserLocale setting
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
