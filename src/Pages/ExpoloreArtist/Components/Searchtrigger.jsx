import { useFormikContext } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { applyfilter } from "../../../Redux/Filter/actionCreator";
import artistfilter from "../../../Constants/Formdata/artistfilter";
function Searchtrigger() {
    const dispatch = useDispatch();
  const { values } = useFormikContext();
  useEffect(() => {
      dispatch(applyfilter(artistfilter(values)));
  }, [values]);

  return null;
}

export default Searchtrigger;
