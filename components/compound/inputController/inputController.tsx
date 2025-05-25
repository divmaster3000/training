import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { FC } from "react";
import { useController } from "react-hook-form";

type InputControllerProps = {
  name: string;
  title: string;
  control: any;
  defaultValue: any;
  type: "text" | "password";
  isDisabled?: boolean;
};

export const InputController: FC<InputControllerProps> = ({
  title,
  name,
  control,
  defaultValue,
  type,
  isDisabled = false,
}) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
  });
  const { error } = fieldState;

  return (
    <FormControl isInvalid={!!error?.message}>
      <FormControlLabel>
        <FormControlLabelText>{title}</FormControlLabelText>
      </FormControlLabel>
      <Input className="w-full" isDisabled={isDisabled}>
        <InputField
          value={field.value}
          onChangeText={field.onChange}
          type={type}
        />
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{error?.message}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};
