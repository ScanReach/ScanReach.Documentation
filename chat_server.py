import os
os.environ["ANONYMIZED_TELEMETRY"] = "False"

import ollama
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

def load_vectorstore():
    # Same embedding model as used during ingestion
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    vectorstore = Chroma(
        persist_directory="./chroma_db",
        embedding_function=embeddings
    )
    return vectorstore

def ask_question(question, vectorstore):
    relevant_docs = vectorstore.similarity_search(question, k=3)
    context = "\n\n".join([doc.page_content for doc in relevant_docs])
    
    prompt = f"""Based on the following documentation, please answer the question.
    
Documentation:
{context}

Question: {question}

Answer based only on the documentation provided:"""
    
    try:
        response = ollama.generate(
            model='qwen2.5:0.5b',  # Small LLM for chat responses
            prompt=prompt,
            stream=False
        )
        return response['response']
    except Exception as e:
        return f"Error connecting to Ollama: {str(e)}"

def main():
    print("Loading vectorstore...")
    try:
        vectorstore = load_vectorstore()
        print("Chat ready! Type 'quit' to exit.")
        
        while True:
            question = input("\nQuestion: ")
            if question.lower() == 'quit':
                break
            
            answer = ask_question(question, vectorstore)
            print(f"\nAnswer: {answer}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()