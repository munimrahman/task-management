const ProjectInformation = () => {
  return (
    <div className="col-span-1 md:col-span-8 bg-white p-5 rounded-lg shadow">
      <h1 className="text-lg font-medium">Project Information</h1>
      {/* <div className="container mx-auto rounded-md dark:text-gray-100 dark:bg-gray-900">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg dark:bg-gray-700">
              <tr className="text-center">
                <th title="Team name" className="p-3 text-left">
                  Title
                </th>
                <th title="Wins" className="p-3">
                  Date Start
                </th>
                <th title="Losses" className="p-3">
                  Deadline
                </th>
                <th title="Win percentage" className="p-3">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                <td className="px-3 py-2 text-left">
                  <span>Social Media</span>
                </td>
                <td className="px-3 py-2">
                  <span>02-08-2023</span>
                </td>
                <td className="px-3 py-2">
                  <span>31-12-2023</span>
                </td>
                <td className="px-3 py-2">
                  <span>
                    <progress
                      className="progress w-28"
                      value="40"
                      max="100"
                    ></progress>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Start Date</th>
              <th>Deadline</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Social Media</td>
              <td>18-05-2023</td>
              <td>31-12-2023</td>
              <td>
                <progress
                  className="progress w-28"
                  value="40"
                  max="100"
                ></progress>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Social Media</td>
              <td>18-05-2023</td>
              <td>31-12-2023</td>
              <td>
                <progress
                  className="progress w-28"
                  value="40"
                  max="100"
                ></progress>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Social Media</td>
              <td>18-05-2023</td>
              <td>31-12-2023</td>
              <td>
                <progress
                  className="progress w-28"
                  value="40"
                  max="100"
                ></progress>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Social Media</td>
              <td>18-05-2023</td>
              <td>31-12-2023</td>
              <td>
                <progress
                  className="progress w-28"
                  value="40"
                  max="100"
                ></progress>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Social Media</td>
              <td>18-05-2023</td>
              <td>31-12-2023</td>
              <td>
                <progress
                  className="progress w-28"
                  value="40"
                  max="100"
                ></progress>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectInformation;
