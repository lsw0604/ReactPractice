import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonContainer from "../containers/write/WriteActionButtonContainer";
import { Helmet } from "react-helmet-async";

const WritePage = () => {
  return (
    <div>
      <Helmet>
        <title>POST WRITE - REACTERS</title>
      </Helmet>
      <Responsive>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonContainer />
      </Responsive>
    </div>
  );
};

export default WritePage;