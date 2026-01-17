const ContactTable = () => {
  return (
<table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      <tr className="bg-white border-b">
        <td className="py-3 px-6">1</td>
        <td className="py-3 px-6">John Doe</td>
        <td className="py-3 px-6">1234567890</td>
        <td className="py-3 px-6">2023-01-01</td>
        <td className="py-3 px-6 text-center">
          <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
          <button className="text-red-500 hover:text-red-700">Delete</button>
        </td>
      </tr>
    </table>
  );
};

export default ContactTable;