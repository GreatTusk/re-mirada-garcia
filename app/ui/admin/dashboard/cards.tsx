import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/admin/fonts";
import {
  fetchPedidosQuantity,
  fetchRevenue,
  fetchTotalUsuarios,
} from "@/app/admin/lib/db";
import { formatPriceWithSeparator } from "@/app/lib/util_server";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const [total_received, total_pedidos, numberOfCustomers] = await Promise.all([
    fetchRevenue(),
    fetchPedidosQuantity(),
    fetchTotalUsuarios(),
  ]);

  return (
    <>
      <Card
        title="Recaudado"
        value={`$${formatPriceWithSeparator(total_received)}`}
        type="collected"
      />
      <Card title="Pendiente" value={"$0"} type="pending" />
      <Card title="Total solicitudes" value={total_pedidos} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
