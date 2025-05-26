import { InputController } from "@/components/compound/inputController/inputController";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { validationSchema } from "./login.config";

export const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  const goToSignUp = () => router.push("/(auth)/register");

  return (
    <VStack className="flex items-center justify-center bg-black">
      <Image
        source={require("../../../assets/images/logo.png")}
        contentFit="cover"
        style={{ width: 300, height: 300 }}
      />
      <VStack className="flex flex-column items-center justify-center m-[20] p-[0] gap-4">
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
          variant="solid"
          action="primary"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText>Login</ButtonText>
        </Button>
        <Box className="flex flex-row justify-center items-center gap-2 m-top">
          <Text>Don&apos;t have account yet?</Text>
          <Button variant="link" onPress={goToSignUp}>
            <ButtonText>Sign up</ButtonText>
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
};
