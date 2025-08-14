import os
os.environ["ANONYMIZED_TELEMETRY"] = "False"

from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import MarkdownTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

def ingest_documents():
    loader = DirectoryLoader(
        './docs', 
        glob="**/*.md", 
        loader_cls=TextLoader,
        show_progress=True
    )
    documents = loader.load()
    
    if not documents:
        print("No documents found in ./docs directory")
        return
    
    print(f"Loaded {len(documents)} documents")
    
    text_splitter = MarkdownTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )
    chunks = text_splitter.split_documents(documents)
    
    # Use the correct embedding model name
    embeddings = HuggingFaceEmbeddings(
        model_name="all-MiniLM-L6-v2"  # This is correct for embeddings
    )
    
    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory="./chroma_db"
    )
    
    print(f"Ingested {len(chunks)} document chunks into ChromaDB")

if __name__ == "__main__":
    ingest_documents()