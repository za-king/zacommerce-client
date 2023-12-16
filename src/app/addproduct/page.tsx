import Layout from "@/components/Layout";

function AddProduct() {
  return (
    <Layout>
      <div className="h-screen container py-12 ">
        <div className=" border-2 bg- rounded-lg py-12">
          <div className="text-xl text-center font-bold my-4">Add roduct</div>
          <form action="" className="mx-12">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered  w-full  mb-2"
            />
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered  w-full mb-2"
            />
            <textarea
              className="textarea textarea-bordered w-full mb-2"
              placeholder="Description"
            />

            <input
              type="text"
              placeholder="Rating"
              className="input input-bordered  w-full mb-2"
            />

            <input
              type="file"
              className="file-input file-input-bordered w-full mb-2"
            />
            <select className="select select-bordered w-full mb-2">
              <option disabled selected>
                select category
              </option>
              <option>shoes</option>
              <option>house</option>
              <option>tshirt</option>
            </select>

            <button className="btn btn-primary mb-4">Post Product</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;
