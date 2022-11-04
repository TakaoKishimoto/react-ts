import * as yup from 'yup';
import type { InferType } from 'yup';
import { genderCode } from './constants';

export const regFormSchema = yup.object({
  username: yup.string().required('Necessary'),
  zipcode: yup.string().max(7).matches(/\d{7}/, '7 digits numbers'),
  gender: yup.mixed().oneOf(Object.keys(genderCode)),
  isAgreed: yup.boolean().oneOf([true], 'Need an Agreement').required(),
});

export type RegFormSchema = InferType<typeof regFormSchema>;
