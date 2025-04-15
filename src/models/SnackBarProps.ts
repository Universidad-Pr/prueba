export interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
  severity: 'error' | 'success' | 'warning';
}
