import * as yup from 'yup';

export const contactFromSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введіть корректну елктронну адресу')
    .required('Введіть електронну адресу')
    .max(150, 'Максимальна довжина поля - 150 символів'),
  sender: yup
    .string()
    .required("Введіть прізвище та ім'я")
    .max(150, 'Максимальна довжина поля - 150 символів'),
  message: yup
    .string()
    .required('Введіть повідомлення')
    .min(30, 'Мінімальна довжина поля - 30 символів')
    .max(1000, 'Максимальна довжина поля - 1000 символів')
});
