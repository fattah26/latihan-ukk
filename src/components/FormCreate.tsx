import { FIELD_CREATE } from "@/contans/index";
import CustomButton from "./Button";

interface FormProps {
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
  isLoading: boolean;
}

export default function FormCreate(props: FormProps) {
  const { isOpen, onCancel, onSubmit, onChange, formData, isLoading } = props;

  return (
    <section
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <form
        onSubmit={onSubmit}
        className={`w-3/12 bg-white shadow-lg p-8 rounded-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          TAMBAH SISWA
        </h1>
        {FIELD_CREATE.map((form, index) => (
          <div key={index} className="mb-2">
            <label className="block mb-1">{form.label}</label>
            <input
              type={form.type}
              name={form.name}
              value={formData[form.name]} 
              onChange={onChange}
              placeholder={form.placeholder}
              className="w-full border-gray-300 border rounded-md p-2"
            />
          </div>
        ))}
        <div className="flex w-full gap-3 justify-end mt-10">
          <CustomButton onClick={onCancel} size="small" variant="outlined">
            Cancel
          </CustomButton>

          <CustomButton size="small" type="submit">
            {isLoading ? "Loading" : "Submit"}
          </CustomButton>
        </div>
      </form>
    </section>
  );
}
