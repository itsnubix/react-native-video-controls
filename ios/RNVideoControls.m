
#import "RNVideoControls.h"
#import <React/RCTLog.h>
#include <AVFoundation/AVFoundation.h>
#include <AVKit/AVKit.h>

@implementation RNVideoControls

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getPictureInPictureImages:(RCTResponseSenderBlock)callback)
{
    RCTLogInfo(@"getPictureInPictureImages");
    
    UIImage *startImage = [AVPictureInPictureController pictureInPictureButtonStartImageCompatibleWithTraitCollection:nil];
    
    UIImage *stopImage = [AVPictureInPictureController pictureInPictureButtonStopImageCompatibleWithTraitCollection:nil];
    
    NSString *startImageBase64 = [UIImagePNGRepresentation(startImage) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
    
    NSString *stopImageBase64 = [UIImagePNGRepresentation(stopImage) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
    
    NSDictionary *images = @{
                           @"startImage": startImageBase64,
                           @"stopImage": stopImageBase64
                           };
    
    callback(@[[NSNull null], images]);
}

RCT_EXPORT_METHOD(isPictureInPictureSupported:(RCTResponseSenderBlock)callback)
{
    RCTLogInfo(@"isPictureInPictureSupported");
    
    BOOL supported = [AVPictureInPictureController isPictureInPictureSupported];
    
    callback(@[[NSNull null], @(supported)]);
}

@end
  
