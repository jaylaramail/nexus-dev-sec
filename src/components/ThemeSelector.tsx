import React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useColorTheme } from '@/contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ThemeSelector = () => {
  const { colorTheme, setColorTheme } = useColorTheme();

  const themes = [
    { name: 'Blue Ocean', value: 'blue' as const, color: 'bg-blue-500' },
    { name: 'Forest Green', value: 'green' as const, color: 'bg-green-500' },
    { name: 'Purple Galaxy', value: 'purple' as const, color: 'bg-purple-500' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Palette className="h-4 w-4 mr-2" />
          Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setColorTheme(theme.value)}
            className="flex items-center gap-2"
          >
            <div className={`w-4 h-4 rounded-full ${theme.color}`}></div>
            {theme.name}
            {colorTheme === theme.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;