type MyHeaderProps = {
  title: string;
};

export const Header = ({
  title = "title in the main component",
}: MyHeaderProps) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <div className="card" style={{ width: "18 rem" }}>
          <img
            src="https://images.unsplash.com/photo-1528965051322-6d335c69eb86?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            height={"150px"}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div className="card text-bg-primary mb-3" style={{ width: "18rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card text-bg-info mb-3" style={{ width: "18rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};
