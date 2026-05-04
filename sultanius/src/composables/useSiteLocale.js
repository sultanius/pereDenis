import { ref } from 'vue'

const STORAGE_KEY = 'site-locale'

function readStored() {
    if (typeof localStorage === 'undefined') return 'ru'
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'en' || v === 'ru' ? v : 'ru'
}

const locale = ref(readStored())

export function useSiteLocale() {
    function setLocale(code) {
        if (code !== 'ru' && code !== 'en') return
        locale.value = code
        try {
            localStorage.setItem(STORAGE_KEY, code)
        } catch {
            /* ignore quota / private mode */
        }
    }

    /** @param {{ ru: string, en: string }} row */
    function t(row) {
        if (!row) return ''
        return row[locale.value] ?? row.ru ?? ''
    }

    return { locale, setLocale, t }
}
