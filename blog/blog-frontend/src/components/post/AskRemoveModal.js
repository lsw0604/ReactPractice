import AskModal from "../common/AskModal";

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal 
      visible={visible}
      title="POST DELETE"
      description="Are you sure you want to delete the post?"
      confirmText="DELETE"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskRemoveModal;