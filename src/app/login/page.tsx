import Layout from "@/components/Layout";


function page() {
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <form action="">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs mb-2"
              />
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
            </form>
            <button className="btn btn-neutral">
              <span className="loading loading-spinner"></span>
              Login
            </button>

            <button className="btn">
              <span className="loading loading-spinner"></span>
              signin with google
            </button>
          </div>
        </div>
        <div className="toast">
          <div className="alert alert-info">
            <span>New message arrived.</span>
          </div>
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default page;
