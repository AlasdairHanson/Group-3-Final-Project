#Use Java Image
FROM Java:8

#Make working directory and store it in image called "app"
WORKDIR /app

# Install apt dependencies

# Copy contents into image
COPY ./filename.war .

# run list of dependencies dependencies
#RUN install -r requirements.txt

# Expose correct port
EXPOSE 5001

# Create an entrypoint
ENTRYPOINT ["Java", "-Jar", "filename.war"]
