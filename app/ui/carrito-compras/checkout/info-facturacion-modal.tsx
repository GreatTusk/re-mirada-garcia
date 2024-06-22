import { Checkbox, Dropdown, Modal, Select, Textarea } from "flowbite-react";
import { Region } from "@/app/lib/definitions";
import React, { useState } from "react";
import { formatRut, isValidRut } from "@/app/lib/util";
import { countriesJSON } from "@/app/lib/data";
import { crearContactoVenta, ContactState } from "@/app/lib/actions";

export default function InfoFacturacionModal({
  openModal,
  setOpenModal,
  comunasRegiones,
  loading,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  comunasRegiones: Region[];
  loading: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [empresa, setEmpresa] = useState(false);
  const [rut, setRut] = useState("");
  const [isValid, setIsValid] = useState(true);
  const initialCountry = countriesJSON[3];
  const [country, setCountry] = useState(
    `${initialCountry.emoji}${initialCountry.dial_code}`,
  );
  const [initialState, setInitialState] = useState<ContactState>({
    message: null,
    errors: {},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanedValue = inputValue.replace(/[^0-9Kk]/g, "").toUpperCase();

    if (cleanedValue.length > 0) {
      setIsValid(isValidRut(cleanedValue));
    } else {
      setIsValid(true); // Consider empty input as valid for now
    }

    setRut(cleanedValue);
  };

  const formattedRut = rut ? formatRut(rut) : "";

  if (loading) {
    return;
  }

  return (
    <Modal
      show={openModal}
      size="xl"
      onClose={() => setOpenModal(false)}
      popup
      className="antialiased fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-auto w-full max-h-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
    >
      {/* <!-- Modal content --> */}
      <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
        {/* <!-- Modal header --> */}
        <Modal.Header className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Información de facturación
          </h3>
        </Modal.Header>
        {/* <!-- Modal body --> */}
        <form
          className="p-4 md:p-5"
          action={async (formData) => {
            console.log("Form data", formData);
            // const newState: ContactState = await crearContactoVenta(
            //   initialState,
            //   formData,
            // );
            // setInitialState(newState);
            // if (newState.message === "Solicitud enviada exitosamente.") {
            //   setOpenModal(false);
            // }
          }}
        >
          <Modal.Body>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
              <div className="flex items-center gap-4 sm:col-span-2 pt-0.5">
                <div className="flex items-center">
                  <Checkbox
                    id="company_address_billing_modal"
                    data-collapse-toggle="company-info-container-modal"
                    aria-expanded="false"
                    onClick={() => setEmpresa(!empresa)}
                    value=""
                    name="address-type-modal"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="company_address_billing_modal"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    Contratar como empresa{" "}
                  </label>
                </div>
              </div>
              {empresa && (
                <>
                  <div>
                    <label
                      htmlFor="company_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Nombre de la empresa{" "}
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Flowbite LLC"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vat_number"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      RUT{" "}
                    </label>
                    <input
                      type="text"
                      id="vat_number"
                      value={formattedRut}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500
          ${isValid ? "border-gray-300 bg-gray-50 text-gray-900" : "border-red-500 bg-red-50 text-red-900"}
          dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500`}
                      placeholder="09.999.999-9"
                    />
                    {!isValid && (
                      <p className="mt-2 text-sm text-red-600">RUT inválido</p>
                    )}
                  </div>
                </>
              )}

              <div className="sm:col-span-2">
                <div className="mb-2 flex items-center gap-1">
                  <label
                    htmlFor="saved-address-modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Dirección{" "}
                  </label>
                  {/*<svg*/}
                  {/*  data-tooltip-target="saved-address-modal-desc-2"*/}
                  {/*  data-tooltip-trigger="hover"*/}
                  {/*  className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"*/}
                  {/*  aria-hidden="true"*/}
                  {/*  xmlns="http://www.w3.org/2000/svg"*/}
                  {/*  width="24"*/}
                  {/*  height="24"*/}
                  {/*  fill="currentColor"*/}
                  {/*  viewBox="0 0 24 24"*/}
                  {/*>*/}
                  {/*  <path*/}
                  {/*    fillRule="evenodd"*/}
                  {/*    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"*/}
                  {/*    clipRule="evenodd"*/}
                  {/*  />*/}
                  {/*</svg>*/}
                </div>
                <input
                  id="saved-address-modal"
                  placeholder={"Los poetas #652, Santiago"}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                ></input>
              </div>

              <div>
                <label
                  htmlFor="first_name_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Nombre*{" "}
                </label>
                <input
                  type="text"
                  id="first_name_billing_modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="last_name_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Apellido*{" "}
                </label>
                <input
                  type="text"
                  id="last_name_billing_modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Ingrese su apellido"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-input_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Número de teléfono*{" "}
                </label>
                <div className="flex items-center">
                  <Dropdown
                    className="z-10 inline-flex shrink-0 items-center rounded-s-lg px-4 py-2.5 text-center text-sm font-medium"
                    label={""}
                    color={"gray"}
                    size={"sm"}
                    placement={"bottom"}
                    renderTrigger={() => (
                      <div
                        className={
                          "z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        }
                      >
                        {country}
                      </div>
                    )}
                  >
                    {countriesJSON.map((country) => (
                      <Dropdown.Item
                        key={country.code}
                        className="py-1"
                        onClick={() =>
                          setCountry(`${country.emoji} ${country.dial_code}`)
                        }
                      >
                        {country.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="phone-input"
                      className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                      pattern="[0-9]{8}"
                      placeholder="12345678"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <label
                    htmlFor="select_country_input_billing_modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Región*{" "}
                  </label>
                </div>
                <select
                  id="select_country_input_billing_modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >
                  {comunasRegiones.map((region, index) => (
                    <option
                      key={region.region}
                      value={region.region}
                      onClick={() => setIndex(index)}
                    >
                      {region.region}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <label
                    htmlFor="select_city_input_billing_modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Comuna*{" "}
                  </label>
                </div>
                <select
                  id="select_city_input_billing_modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  defaultValue={"San Francisco"}
                >
                  {comunasRegiones[index].comunas.map((comuna) => (
                    <option key={comuna} value={comuna}>
                      {comuna}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Desripción del evento*{" "}
                </label>
                <Textarea
                  id="address_billing_modal"
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Describa su evento aquí..."
                ></Textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
            <button
              type="submit"
              className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Confirmar
            </button>
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              data-modal-toggle="billingInformationModal"
              className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Cancelar
            </button>
          </Modal.Footer>
        </form>
      </div>
    </Modal>
  );
}
