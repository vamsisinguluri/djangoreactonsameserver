
from django.contrib import admin
from django.urls import path
from chat.views import book,index

urlpatterns = [
    path('admin/', admin.site.urls),
    path("book/", book, name="book"),
    path("", index, name="index")
]
