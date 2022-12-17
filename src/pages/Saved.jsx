import { Loading, SavedItem } from "../components";
import { useNewsContext } from "../context/newsContext";
import { SET_SAVED_NEWS } from "../reducer/actions";

function Saved() {
  const [state, dispatch] = useNewsContext();
  const { saved_news, isLoading } = state;

  if (isLoading) return <Loading />;

  const deleteNews = (id) => {
    const deleteNews = state.saved_news.filter((item) => item.url !== id);
    dispatch({ type: SET_SAVED_NEWS, payload: deleteNews });
  };

  const emptyMessage = (
    <tr>
      <td colSpan={4}>
        <p className="p-5 text-lg font-medium text-center text-gray-600 lg:p-3">
          There is no favorite news yet, choose your favorite news.
        </p>
      </td>
    </tr>
  );

  return (
    <section className="px-4 bg-white py-7 lg:py-12 lg:px-28">
      <table className="w-full table-fixed ">
        <thead className="text-2xl border-b-2 border-primary-light">
          <tr className="text-left">
            <th className="w-1/12" />
            <th className="w-3/12 lg:p-2">Source</th>
            <th className="w-3/12 lg:p-2">Title</th>
            <th className="w-5/12 lg:p-2">Description</th>
          </tr>
        </thead>
        <tbody className="shadow-xl">
          {saved_news.length !== 0
            ? saved_news.map((item, index) => (
                <SavedItem
                  key={item.url}
                  index={index}
                  deleteNews={deleteNews}
                  {...item}
                />
              ))
            : emptyMessage}
        </tbody>
      </table>
    </section>
  );
}

export default Saved;
