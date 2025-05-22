
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Redemption {
  id: number;
  rewardTitle: string;
  date: string;
  pointsCost: number;
  couponCode?: string;
  trackingCode?: string;
  status: string;
}

interface RedemptionHistoryProps {
  redemptions: Redemption[];
}

const RedemptionHistory: React.FC<RedemptionHistoryProps> = ({ redemptions }) => {
  const [dateFilter, setDateFilter] = useState<string>("all");
  
  // Apply date filter
  const filteredRedemptions = dateFilter === "all" 
    ? redemptions 
    : redemptions.filter(item => {
        const redemptionDate = new Date(item.date);
        const now = new Date();
        
        if (dateFilter === "month") {
          const monthAgo = new Date();
          monthAgo.setMonth(now.getMonth() - 1);
          return redemptionDate >= monthAgo;
        } else if (dateFilter === "week") {
          const weekAgo = new Date();
          weekAgo.setDate(now.getDate() - 7);
          return redemptionDate >= weekAgo;
        }
        return true;
      });
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Historial de canjes</h3>
        <div className="space-x-2">
          <Button 
            variant={dateFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setDateFilter("all")}
            className={dateFilter === "all" ? "bg-brand-green hover:bg-brand-green/90" : ""}
          >
            Todos
          </Button>
          <Button 
            variant={dateFilter === "month" ? "default" : "outline"}
            size="sm"
            onClick={() => setDateFilter("month")}
            className={dateFilter === "month" ? "bg-brand-green hover:bg-brand-green/90" : ""}
          >
            Último mes
          </Button>
          <Button 
            variant={dateFilter === "week" ? "default" : "outline"}
            size="sm"
            onClick={() => setDateFilter("week")}
            className={dateFilter === "week" ? "bg-brand-green hover:bg-brand-green/90" : ""}
          >
            Última semana
          </Button>
        </div>
      </div>
      
      {filteredRedemptions.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Recompensa</TableHead>
              <TableHead>Goles</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRedemptions.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                <TableCell>{item.rewardTitle}</TableCell>
                <TableCell className="text-red-500">-{item.pointsCost}</TableCell>
                <TableCell>
                  <Badge>{item.status}</Badge>
                </TableCell>
                <TableCell>
                  {item.couponCode && (
                    <Button variant="outline" size="sm" className="text-brand-green">
                      Ver cupón
                    </Button>
                  )}
                  {item.trackingCode && (
                    <Button variant="outline" size="sm" className="text-brand-green">
                      Seguir envío
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center py-12 text-gray-500">
          No tienes canjes en este período.
        </div>
      )}
    </div>
  );
};

export default RedemptionHistory;
