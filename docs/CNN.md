CNN stands for Convolutional Neural Network. Compared to the traditional NNs that uses pre-defined features, CNNs use filters to extract features from an image.

Downsampling the image is useful for saving memory and computation costs. Pooling layer is used to reduce the size of the image. It is done by taking the maximum value of the pixels in a window.

Backpropagation is used to update the weights of the network by moving in the direction of the better output. 

Convolutational layer is used to extract features from the image. It is done by sliding a filter over the image and multiplying the filter with the image. The filter is then moved to the next pixel and the process is repeated. The output of the convolutional layer is a feature map.

Traditional CNNs loose spatial information when the image is compressed. This is because the image is flattened into a vector. The encoder-decoder architecture is used to preserve the spatial information of the image. The encoder is a CNN that compresses the image into a vector. The decoder is a CNN that decompresses the vector into an image. The encoder and decoder are trained together. Traditional CNNs are used as the encoder and the decoder is a CNN with the same architecture as the encoder but with the weights reversed. 

CNNs are the best for image inputs. Transformers are the best for text inputs.
