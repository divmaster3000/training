import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "expo-image";
import { Form, useForm } from "react-hook-form";
import { validationSchema } from "./login.config";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <VStack className="flex items-center justify-center">
      <Image
        source={require("../../../assets/images/logo.png")}
        contentFit="cover"
        style={{ width: 300, height: 300 }}
      />
      <Form control={control}>
        <VStack className="flex flex-column items-center justify-center m-[20] max-w-xs gap-4">
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input className="w-full">
              <InputField {...register("email")} />
            </Input>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input className="w-full">
              <InputField {...register("password")} />
            </Input>
          </FormControl>
          <Button size="md" variant="solid" action="primary">
            <ButtonText>Login</ButtonText>
          </Button>
        </VStack>
      </Form>
    </VStack>
  );
};
