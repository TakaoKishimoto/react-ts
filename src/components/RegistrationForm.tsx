import type { FC, SyntheticEvent } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { genderCode, regFormSchema } from 'schemas';
import type { RegFormSchema } from 'schemas';

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegFormSchema>({
    defaultValues: {
      username: '',
      isAgreed: false,
    },
    resolver: yupResolver(regFormSchema),
  });
  const onSubmit: SubmitHandler<RegFormSchema> = (data) => console.log(data);
  const onReset = (e: SyntheticEvent) => {
    e.stopPropagation();
    reset();
  };

  return (
    <Box p={3} w="md" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <form onSubmit={handleSubmit(onSubmit)} action="/hoge">
        <FormControl isInvalid={errors.username !== undefined} isRequired>
          <FormLabel htmlFor="username" mt={2}>
            User Name
          </FormLabel>
          <Input size="md" {...register('username')} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.zipcode !== undefined}>
          <FormLabel htmlFor="zipcode" mt={4}>
            Postal Code
          </FormLabel>
          <Input size="md" maxLength={7} {...register('zipcode')} />
          <FormErrorMessage>{errors.zipcode?.message}</FormErrorMessage>
        </FormControl>
        <Select my={6} placeholder="Chose your gender" {...register('gender')}>
          {Object.entries(genderCode).map(([code, name]) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </Select>
        <FormControl isInvalid={errors.isAgreed !== undefined}>
          <Checkbox {...register('isAgreed')}>Agree to the disipline</Checkbox>
          <FormErrorMessage justifyContent="center">
            {errors.isAgreed?.message}
          </FormErrorMessage>
        </FormControl>
        <ButtonGroup my={3} w="xs">
          <Button
            w="30%"
            colorScheme="orange"
            variant="solid"
            onClick={onReset}
          >
            Reset
          </Button>
          <Button w="70%" colorScheme="blue" variant="solid" type="submit">
            Submit
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default RegistrationForm;
