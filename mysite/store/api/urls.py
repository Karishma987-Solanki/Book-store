from .views import MobileViewSet, LaptopViewSet, BookViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('mobile', MobileViewSet, basename='mobiles')
router.register('laptop', LaptopViewSet, basename='laptops')
router.register('book', BookViewSet, basename='books')
urlpatterns = router.urls
