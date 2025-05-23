import React from "react";
import RevealPasswordToggle from "src/components/password/RevealPasswordToggle";
import { Input } from "src/components/ui/input";

type PasswordInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "value"
> & {
  value: string;
  onChange?: (value: string) => void;
};

export default function PasswordInput({
  onChange,
  placeholder,
  value,
  ...restProps
}: PasswordInputProps) {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <Input
      type={passwordVisible ? "text" : "password"}
      value={value}
      required
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
      {...restProps}
      endAdornment={
        <RevealPasswordToggle
          isRevealed={passwordVisible}
          onChange={setPasswordVisible}
        />
      }
    />
  );
}
