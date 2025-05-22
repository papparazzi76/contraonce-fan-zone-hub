
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter 
} from "@/components/ui/dialog";

interface Reward {
  id: number;
  title: string;
  description: string;
  cost: number;
  type: 'coupon' | 'item';
  stock: number;
  expiryDate: string;
  isPopular: boolean;
}

interface RewardConfirmationDialogProps {
  isOpen: boolean;
  selectedReward: Reward | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const RewardConfirmationDialog: React.FC<RewardConfirmationDialogProps> = ({ 
  isOpen, 
  selectedReward, 
  onOpenChange, 
  onConfirm 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar canje</DialogTitle>
          <DialogDescription>
            {selectedReward && (
              <>
                ¿Estás seguro que quieres canjear "{selectedReward.title}" por {selectedReward.cost} goles?
              </>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button 
            className="bg-brand-green hover:bg-brand-green/90" 
            onClick={onConfirm}
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RewardConfirmationDialog;
