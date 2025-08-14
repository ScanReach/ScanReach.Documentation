FROM python:3.11-slim

RUN apt-get update && apt-get install -y gcc g++ && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
RUN pip install --no-cache-dir \
    ollama==0.3.3 \
    faiss-cpu==1.7.4 \
    langchain==0.1.20 \
    langchain-community==0.0.38 \
    sentence-transformers==2.7.0 \
    chromadb

COPY . /app
WORKDIR /app

RUN python ingest_docs.py
CMD ["python", "chat_server.py"]