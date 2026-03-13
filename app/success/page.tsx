export default function SuccessPage() {
  return (
    <div className="container mt-5">

      <h1>Payment Successful 🎉</h1>

      <p>Your booking has been confirmed.</p>

      <a href="/rooms" className="btn btn-primary">
        Back to Rooms
      </a>

    </div>
  );
}