import { useRouter } from 'vue-router'

export function useNavigate() {
  const router = useRouter();
  
  const navigateTo = (to) => {
    router.replace(to);
  };
  
  return { navigateTo };
}
