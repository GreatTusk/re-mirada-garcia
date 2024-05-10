import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { HiMail, HiPhone, HiUser } from "react-icons/hi";
import { crearContactoVenta, State } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import ModalExito from "@/app/ui/tienda/carrito-compras/modal-exito";

type FormularioContactoProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FormularioContacto({
  setOpenModal,
}: FormularioContactoProps) {
  let initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(crearContactoVenta, initialState);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    initialState = await crearContactoVenta(
      initialState,
      new FormData(event.currentTarget),
    );
    console.log(initialState.message);
    if (initialState.message === "Solicitud enviada exitosamente.") {
      setOpenModal(false);
    }
  }

  return (
    <form action={dispatch} onSubmit={onSubmit} className="space-y-6">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="nombre"
            value="Ingrese su nombre:"
            color={state.errors?.email ? "failure" : undefined}
          />
        </div>
        <TextInput
          id="nombre"
          name="nombre"
          icon={HiUser}
          type="text"
          placeholder="Darío García"
          color={state.errors?.nombre ? "failure" : undefined}
          helperText={
            state.errors?.nombre && (
              <>
                <span className="font-medium">¡Uy!</span> {state.errors.nombre}
              </>
            )
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email4"
            value="Ingrese su correo:"
            aria-describedby="error-correo"
            color={state.errors?.email ? "failure" : undefined}
          />
        </div>
        <TextInput
          id="email"
          name="email"
          type="email"
          icon={HiMail}
          placeholder="nombre@mail.com"
          color={state.errors?.email ? "failure" : undefined}
          helperText={
            state.errors?.email && (
              <>
                <span className="font-medium">¡Uy!</span> {state.errors.email}
              </>
            )
          }
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="fono"
            value="Ingrese su teléfono:"
            color={state.errors?.email ? "failure" : undefined}
          />
        </div>
        <TextInput
          id="fono"
          name="fono"
          icon={HiPhone}
          type="tel"
          placeholder="912345678"
          color={state.errors?.fono ? "failure" : undefined}
          helperText={
            state.errors?.fono && (
              <>
                <span className="font-medium">¡Uy!</span> {state.errors.fono}
              </>
            )
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="consulta"
            value="Ingrese su consulta:"
            color={state.errors?.consulta ? "failure" : undefined}
          />
        </div>
        <Textarea
          id="consulta"
          name="consulta"
          placeholder="Tengo planeado..."
          rows={4}
          color={state.errors?.consulta ? "failure" : undefined}
          helperText={
            state.errors?.consulta && (
              <>
                <span className="font-medium">¡Uy!</span>{" "}
                {state.errors.consulta}
              </>
            )
          }
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="boletin" name="boletin" defaultChecked />
          <Label htmlFor="boletin">
            Quiero recibir un boletín con las últimas novedades de MiradaGarcía.
          </Label>
        </div>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
        Su consulta será respondida por un ejecutivo en un plazo de 24 horas.
      </div>
      <div className="w-full">
        <Button outline gradientDuoTone="cyanToBlue" type="submit">
          Enviar consulta
        </Button>
      </div>
    </form>
  );
}
