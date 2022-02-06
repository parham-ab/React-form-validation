import { useEffect } from "react";

const MyTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
export default MyTitle;
