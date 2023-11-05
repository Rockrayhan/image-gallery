import React, { useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Gallery.css';
import fakeData from './fakedata.json';

const Gallery = () => {
  const [images, setImages] = useState(fakeData);
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);

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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        const newImage = {
          name: file.name,
          id: Math.random().toString(36).substr(2, 9),
          img: imageUrl,
        };
        setImages([...images, newImage]);
      };
      reader.readAsDataURL(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className='container'>
      {selectedImages.length > 0 ? (
        <div className='border border-2 rounded-2 mb-1 p-3'>
          <button className='btn btn-danger' onClick={handleDeleteImages}>
            Delete Selected Images
          </button>
        </div>
      ) : (
        <div className='border border-2 rounded-2 mb-1 p-3'>
          <h2>Gallery</h2>
        </div>
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='image-gallery' direction='horizontal'>
          {(provided) => (
            <div className='row' ref={provided.innerRef}>
              {images.map((item, index) => (
                <Draggable draggableId={item.id.toString()} key={item.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      className='col-lg-2 col-md-4 mt-2'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className='border border-2 rounded-2 card'>
                        <input
                          type='checkbox'
                          checked={selectedImages.includes(item.id)}
                          onChange={() => handleImageSelection(item.id)}
                        />
                        <img className='img-fluid' src={item.img} alt={item.name} style={{ width: '200px', height: '200px' }} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              <div className='col-lg-2 col-md-4 add-image border border-2 rounded-2 mt-2'>
                <label>
                  <input
                    type='file'
                    accept='image/*'
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                  <i className='bi bi-image'></i>
                  <p> Add Images </p>
                </label>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Gallery;
