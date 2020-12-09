
#Use imagename Image
FROM image:latest

#Make directory and store it image name "app"

WORKDIR /app

# Install apt dependencies

# Copy contents into image

COPY . . 

# run pip dependencies
#RUN install -r requirements.txt

# Expose correct port
EXPOSE 5000

# Create an entrypoint
ENTRYPOINT ["", ""]


