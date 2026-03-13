import Link from "next/link";

interface Props {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}

export default function RoomCard({ id, image, name, description, price }: Props) {
  return (
    <div className="col-md-4 col-sm-6">
      <div id="serv_hover" className="room">

        <div className="room_img">
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>

        <div className="bed_room">
          <h3>{name}</h3>
          <p>{description}</p>

          <p>
            <strong>${price}</strong> / night
          </p>

          {/* BOOK NOW BUTTON */}
          <Link href={`/rooms/${id}`} className="btn btn-primary mt-2">
            Book Now
          </Link>

        </div>
      </div>
    </div>
  );
}