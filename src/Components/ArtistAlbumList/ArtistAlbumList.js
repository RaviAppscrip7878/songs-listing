import React, { memo } from "react";
import { Table } from "react-bootstrap";
import "./artistAlbumList.scss";
function ArtistAlbumList({ artistAlbums, classes, title }) {
  return (
    <div className={`artist-album-list ${classes}`}>
      <span className="list-title">{title}</span>
      <div className="playlist-section">
        <Table className="table-container table-responsive " responsive>
          <tbody className="table-body">
            {artistAlbums?.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    className="album-icon"
                    src={item?.images[0].url}
                    alt="album-artist"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.album_type}</td>
                <td className="date-div">{item.release_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default memo(ArtistAlbumList);
