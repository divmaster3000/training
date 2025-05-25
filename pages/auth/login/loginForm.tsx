import { InputController } from "@/components/compound/inputController/inputController";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "expo-image";
import { useForm } from "react-hook-form";
import { validationSchema } from "./login.config";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);
  console.log("errors", errors, isValid);

  return (
    <VStack className="flex items-center justify-center">
      <Image
        source={require("../../../assets/images/logo.png")}
        contentFit="cover"
        style={{ width: 300, height: 300 }}
      />
      <VStack className="flex flex-column items-center justify-center m-[20] max-w-xs gap-4">
        <InputController
          name="email"
          title="Email"
          defaultValue=""
          control={control}
          type="text"
        />
        <InputController
          name="password"
          title="Password"
          defaultValue=""
          control={control}
          type="password"
        />
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};
