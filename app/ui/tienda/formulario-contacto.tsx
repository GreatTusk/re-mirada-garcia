import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { HiMail, HiPhone, HiUser } from "react-icons/hi";
import { ContactState, crearContactoVenta } from "@/app/lib/actions";
import { useState } from "react";

// Actualmente no hace nada. Se podría implementar una función para enviar el formulario y verlo en el dashboard, pero no es necesario.
export default function FormularioContacto({
  setOpenFormModal,
  setOpenSuccessModal,
}: {
  setOpenFormModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [initialState, setInitialState] = useState<ContactState>({
    message: undefined,
    errors: {},
  });

  return (
    <form
      action={async (formData) => {
        const newState: ContactState = await crearContactoVenta(
          initialState,
          formData,
        );
        setInitialState(newState);
        if (newState.message === "Solicitud enviada exitosamente.") {
          setOpenFormModal(false);
          setOpenSuccessModal(true);
        }
      }}
      className="space-y-6"
    >
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="nombre"
            value="Ingrese su nombre:"
            color={initialState.errors?.email ? "failure" : undefined}
          />
        </div>
        <TextInput
          id="nombre"
          name="nombre"
          icon={HiUser}
          type="text"
          placeholder="Darío García"
          color={initialState.errors?.nombre ? "failure" : undefined}
          helperText={
            initialState.errors?.nombre && (
              <>
                <span className="font-medium">¡Uy!</span>{" "}
                {initialState.errors.nombre}
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
            color={initialState.errors?.email ? "failure" : undefined}
          />
        </div>
        <TextInput
          id="email"
          name="email"
          type="email"
          icon={HiMail}
          placeholder="nombre@mail.com"
          color={initialState.errors?.email ? "failure" : undefined}
          helperText={
            initialState.errors?.email && (
              <>
                <span className="font-medium">¡Uy!</span>{" "}
                {initialState.errors.email}
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
            color={initialState.errors?.email ? "failure" : undefined}
          />
        </div>
        <TextInput
          id="fono"
          name="fono"
          icon={HiPhone}
          type="tel"
          placeholder="912345678"
          color={initialState.errors?.fono ? "failure" : undefined}
          helperText={
            initialState.errors?.fono && (
              <>
                <span className="font-medium">¡Uy!</span>{" "}
                {initialState.errors.fono}
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
            color={initialState.errors?.consulta ? "failure" : undefined}
          />
        </div>
        <Textarea
          id="consulta"
          name="consulta"
          placeholder="Tengo planeado..."
          rows={4}
          color={initialState.errors?.consulta ? "failure" : undefined}
          helperText={
            initialState.errors?.consulta && (
              <>
                <span className="font-medium">¡Uy!</span>{" "}
                {initialState.errors.consulta}
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
