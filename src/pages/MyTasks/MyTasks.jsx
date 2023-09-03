const MyTasks = () => {
  return (
    <div className="min-h-screen p-5">
      <div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
        <h2 className="text-lg font-medium">My Tasks</h2>
        <div className="flex">
          <div className="hidden sm:flex border rounded px-3 py-2 mx-1 items-center">
            <span className="text-gray-500 text-sm">Filter By:</span>
            <select
              name=""
              id=""
              className="bg-white focus:outline-none text-sm hover:cursor-pointer"
            >
              <option disabled selected>
                Default
              </option>
              <option value="-createdAt">Newest Task</option>
              <option value="salary">Priority Low-High</option>
              <option value="-salary">Priority High-Low</option>
            </select>
          </div>
          <div className="hidden sm:flex border rounded px-3 py-2 mx-1 items-center">
            <span className="text-gray-500 text-sm">Sort By:</span>
            <select
              name=""
              id=""
              className="bg-white focus:outline-none text-sm hover:cursor-pointer"
            >
              <option disabled selected>
                Default
              </option>
              <option value="-createdAt">Newest Task</option>
              <option value="salary">Priority Low-High</option>
              <option value="-salary">Priority High-Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 mt-5 rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Title</th>
                <th>Project</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Social Media</td>
                <td>18-05-2023</td>
                <td>31-12-2023</td>
                <td>
                  <select
                    name=""
                    id=""
                    className="focus:outline-none text-sm hover:cursor-pointer p-2 rounded"
                  >
                    <option value="-createdAt">Pending</option>
                    <option value="salary">Completed</option>
                    <option value="-salary">In Progress</option>
                  </select>
                </td>
                <td>
                  <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg">
                    Details
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Social Media</td>
                <td>18-05-2023</td>
                <td>31-12-2023</td>
                <td>
                  <select
                    name=""
                    id=""
                    className="focus:outline-none text-sm hover:cursor-pointer p-2 rounded"
                  >
                    <option value="-createdAt">Pending</option>
                    <option value="salary">Completed</option>
                    <option value="-salary">In Progress</option>
                  </select>
                </td>
                <td>
                  <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg">
                    Details
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Social Media</td>
                <td>18-05-2023</td>
                <td>31-12-2023</td>
                <td>
                  <select
                    name=""
                    id=""
                    className="focus:outline-none text-sm hover:cursor-pointer p-2 rounded"
                  >
                    <option value="-createdAt">Pending</option>
                    <option value="salary">Completed</option>
                    <option value="-salary">In Progress</option>
                  </select>
                </td>
                <td>
                  <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg">
                    Details
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Social Media</td>
                <td>18-05-2023</td>
                <td>31-12-2023</td>
                <td>
                  <select
                    name=""
                    id=""
                    className="focus:outline-none text-sm hover:cursor-pointer p-2 rounded"
                  >
                    <option value="-createdAt">Pending</option>
                    <option value="salary">Completed</option>
                    <option value="-salary">In Progress</option>
                  </select>
                </td>
                <td>
                  <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg">
                    Details
                  </button>
                </td>
              </tr>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Social Media</td>
                <td>18-05-2023</td>
                <td>31-12-2023</td>
                <td>
                  <select
                    name=""
                    id=""
                    className="focus:outline-none text-sm hover:cursor-pointer p-2 rounded"
                  >
                    <option value="-createdAt">Pending</option>
                    <option value="salary">Completed</option>
                    <option value="-salary">In Progress</option>
                  </select>
                </td>
                <td>
                  <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg">
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
