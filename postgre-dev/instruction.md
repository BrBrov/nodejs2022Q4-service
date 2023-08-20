docker build -t db .

docker run -it -p 5432:5432 --name=library -v hlib:/var/lib/postgresql/data/home-library db