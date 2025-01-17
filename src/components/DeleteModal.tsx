import * as React from "react";
import CustomButton from "@/components/Button";
import WarningIcon from "@mui/icons-material/Warning";

interface DeleteProps {
  isOpen: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  isLoading: boolean;
}

export default function DeleteModal(props: DeleteProps) {
  const { isOpen, onCancel, onSubmit, isLoading } = props;
  return (
    <section
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-3/12 items-center text-center justify-center bg-white shadow-lg p-8 rounded-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <WarningIcon color="error" className="w-20 h-20"/>
        <h2 className="font-bold text-xl mb-2">Delete Data</h2>
          <p className="font-normal">
            Are you sure you want to delete this data? This action cannot be
            undone.
          </p>
        <div className="flex w-full gap-3 justify-center mt-10">
          <CustomButton onClick={onCancel} size="small" variant="outlined" color="error">
            Cancel
          </CustomButton>

          {isLoading ? (
            <CustomButton
              size="small"  
              loading={true}
              color="error"
              variant="outlined"
              loadingPosition="end"
              type="submit"
            >
              Submit
            </CustomButton>
          ) : (
            <CustomButton size="small" type="submit" color="error" onClick={onSubmit}>
              Submit
            </CustomButton>
          )}
        </div>
      </div>
    </section>
  );
}
