import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Gallery.css';
import fakeData from './fakedata.json';

const Gallery = () => {
  const [images, setImages] = useState(fakeData);
  const [selectedImages, setSelectedImages] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const reorderedImages = [...images];
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);
    setImages(reorderedImages);
  };

  const handleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const handleDeleteImages = () => {
    const updatedImages = images.filter((item) => !selectedImages.includes(item.id));
    setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <div className='container mt-5 main'>

{selectedImages.length > 0 && (
        <div>
          <button className='btn btn-danger mt-5 mb-5' onClick={handleDeleteImages}>Delete Selected Images</button>
        </div>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="image-gallery" direction="horizontal">
          {(provided) => (
            <div className="row" ref={provided.innerRef}>
              {images.map((item, index) => (
                <Draggable draggableId={item.id.toString()} key={item.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      className='col-lg-2 col-md-4'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className='border border-2 rounded-2 card'>
                        <input
                          type="checkbox"
                          checked={selectedImages.includes(item.id)}
                          onChange={() => handleImageSelection(item.id)}
                        />
                        <img className='img-fluid' src={item.img} alt={item.name} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
     
    </div>
  );
};

export default Gallery;
