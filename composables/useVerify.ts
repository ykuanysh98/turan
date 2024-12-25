import { ref } from 'vue';

export const phone = () => {
  const initial = ref(false);

  const error = function(phone: string) {
    const text = ref<string>('');
    
    if (initial.value === false) {
      return text.value;
    }

    if (phone) {
      if (phone.slice(0, 1) !== '7') {
        text.value = 'Номер телефона введен некорректно. Убедитесь, что номер телефона введен в формате: +7 (XXX) XXX-XX-XX.'
      } else if (phone.length < 13) {
        text.value = 'Это поле должно быть заполнено'
      }
    } else {
      text.value = 'Это поле должно быть заполнено'
    }
    return text.value;
  };

  const touch = function() {
    initial.value = true;
  };

  return { error, touch };
};
