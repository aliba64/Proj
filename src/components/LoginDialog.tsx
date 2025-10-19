import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Здесь можно добавить логику авторизации
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-base">Вход в аккаунт</DialogTitle>
          <DialogDescription className="text-sm">
            Войдите в свой аккаунт, чтобы сохранять любимые рецепты
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-3">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-9 text-sm"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-sm">Пароль</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-9 text-sm"
              required
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <Button type="submit" className="w-full h-9 text-sm">
              Войти
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-9 text-sm"
              onClick={() => onOpenChange(false)}
            >
              Отмена
            </Button>
          </div>
          <div className="text-center text-xs text-gray-600">
            Нет аккаунта?{" "}
            <a href="#" className="text-gray-900 hover:underline">
              Зарегистрироваться
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
