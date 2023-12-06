
export const useGuards = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        localStorage.clear()
        return false
    }

    return true
}